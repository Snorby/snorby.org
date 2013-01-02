Snorbyorg::Application.routes.draw do

  resources :pages do
  end

  match "/version", :controller => 'Pages', :action => 'version'
  match "/redirect", :controller => 'Pages', :action => 'redirect'
  match "/iphone", :controller => 'Pages', :action => 'iphone', :as => 'iphone'
  match "/redirect-snorby-cloud", :controller => 'Pages', :action => 'redirect_snorby_cloud'

  root :to => "pages#home"

end
