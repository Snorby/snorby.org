Snorbyorg::Application.routes.draw do

  resources :pages do
  end

  match "/version", :controller => 'Pages', :action => 'version'
  match "/redirect", :controller => 'Pages', :action => 'redirect'
  match "/iphone", :controller => 'Pages', :action => 'iphone'
  match "/redirect-security-onion", :controller => 'Pages', :action => 'redirect_security_onion'

  root :to => "pages#home"

end
