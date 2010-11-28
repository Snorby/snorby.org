source 'http://rubygems.org'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'

RAILS_VERSION = '~> 3.0.3'
RSPEC_VERSION = '~> 2.0.0'
DATAMAPPER = 'http://github.com/datamapper'
DM_VERSION = '~> 1.0.2'

gem 'rails',                  RAILS_VERSION
gem 'jquery-rails'
gem 'bundler',                '~> 1.0.0'

gem 'activesupport',          RAILS_VERSION, :require => 'active_support'
gem 'actionpack',             RAILS_VERSION, :require => 'action_pack'
gem 'actionmailer',           RAILS_VERSION, :require => 'action_mailer'
gem 'railties',               RAILS_VERSION, :require => 'rails'

gem 'dm-core',                DM_VERSION
gem 'dm-rails',               '~> 1.0.3'
gem 'dm-do-adapter',          DM_VERSION
gem 'dm-active_model',        DM_VERSION

gem 'dm-sqlite-adapter',      DM_VERSION

gem 'dm-pager'
gem 'dm-types',               DM_VERSION
gem 'dm-timestamps',          DM_VERSION
gem 'dm-serializer',          DM_VERSION

# Deploy with Capistrano
gem 'capistrano'

# Rails Plugins
gem "mail",                   "2.2.10"

group(:test) do
  gem 'capybara'

  gem 'rspec',			RSPEC_VERSION
  gem 'rspec-core',		RSPEC_VERSION, :require => 'rspec/core'
  gem 'rspec-expectations',	RSPEC_VERSION, :require => 'rspec/expectations'
  gem 'rspec-rails',		RSPEC_VERSION
end

group(:doc) do
  gem 'dm-visualizer',	'~> 0.1.0'
end