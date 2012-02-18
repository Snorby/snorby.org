#require 'bundler/capistrano'

set :application, "opensnorby"
set :domain, '173.255.236.165'
role :app, domain
role :web, domain
role :db,  domain

set :user, 'deploy'
set :deploy_to, "/var/www/apps/#{application}"
set :deply_via, :remote_cache
set :use_sudo, false

set :scm, :git
set :repository, "git@github.com:Snorby/snorby.org.git"
set :branch, "master"

namespace :deploy do
  desc "Restarting mod_rails with restart.txt"
  task :restart do
    run "touch #{current_path}/tmp/restart.txt"
  end

  [:start, :stop].each do |t|
    desc "#{t} task is a no-op with mod_rails"
    task t, :roles => :app do ; end
  end

  task :symlink_shared do
    desc "Moving Shared File To Release Path..."
    run "ln -nfs #{shared_path}/config/database.yml #{current_path}/config/database.yml"
    run "ln -nfs #{shared_path}/Insta-Snorby-0.9.0.iso #{current_path}/public/Insta-Snorby-0.9.0.iso"
    run "ln -nfs #{shared_path}/files #{current_path}/public/files"
  end
end

after 'deploy:update', 'deploy:symlink_shared'
