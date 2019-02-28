class SiteController < ApplicationController

  def home
  end

  def a_propos
    add_breadcrumb "Accueil", :root_path
    add_breadcrumb "A Propos", :a_propos_path
  end



end
