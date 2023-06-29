namespace :csv_import do
  desc "Import corporations from csv file"
  task corporations: :environment do
    require 'csv'
    csv_text = File.read('../dummy_com.csv')
    csv = CSV.parse(csv_text, headers: true)
    csv.each do |row|
      Corporation.create!(row.to_hash)
    end
  end
end