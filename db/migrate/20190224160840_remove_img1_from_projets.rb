class RemoveImg1FromProjets < ActiveRecord::Migration[5.2]
  def change
    remove_column :projets, :img1, :string
    remove_column :projets, :img2, :string
    remove_column :projets, :img3, :string
    remove_column :projets, :img4, :string
  end
end
