Snorbyorg::Application.routes.draw do

  resources :pages do
  end

  match "/version", :controller => 'Pages', :action => 'version'
  match "/redirect", :controller => 'Pages', :action => 'redirect'

  root :to => "pages#home"

end
