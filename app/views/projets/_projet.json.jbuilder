json.extract! projet, :id, :title, :client, :lien, :team, :comment, :technos, :img1, :img2, :img3, :img4, :content, :created_at, :updated_at
json.url projet_url(projet, format: :json)
