Snorbyorg::Application.routes.draw do

  resources :pages do
    
  end

  root :to => "pages#home"

end
