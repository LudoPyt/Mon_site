Rails.application.routes.draw do
  resources :projets
  devise_for :admins
  get '/', to: 'site#home', as: "root"
  get'/contact', to:'site#contact', as:"contact"
  get'/a_propos', to:'site#a_propos', as:"a_propos"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
