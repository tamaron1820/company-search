class Corporation < ApplicationRecord
  def self.search(keyword)
    where('CAST(code AS TEXT) LIKE ? OR status = ? OR name LIKE ? OR name_kana LIKE ? OR postal_code LIKE ? OR address LIKE ? OR representative_name LIKE ? OR representative_name_kana LIKE ? ', 
          "%#{keyword}%", keyword, "#{keyword}", "%#{keyword}%", "%#{keyword}%", "%#{keyword}%", "%#{keyword}%", "%#{keyword}%")
  end
end
