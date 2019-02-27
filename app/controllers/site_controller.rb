class SiteController < ApplicationController
  
  
  def home
  end

  def contact
    
  end


  def a_propos
    add_breadcrumb "Menu", :root_path
    add_breadcrumb "A Propos", :a_propos_path
  end



end
