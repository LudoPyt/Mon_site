class CreateProjets < ActiveRecord::Migration[5.2]
  def change
    create_table :projets do |t|
      t.string :title
      t.string :client
      t.string :lien
      t.string :team
      t.text :comment
      t.string :technos
      t.string :img1
      t.string :img2
      t.string :img3
      t.string :img4
      t.text :content

      t.timestamps
    end
  end
end
