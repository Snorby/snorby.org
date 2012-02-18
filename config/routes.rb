Snorbyorg::Application.routes.draw do

  resources :pages do
  end

  match "/version", :controller => 'Pages', :action => 'version'

  root :to => "pages#home"

end
