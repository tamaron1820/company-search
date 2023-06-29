class ChangeSales2022ToStringInCorporations < ActiveRecord::Migration[7.0]
  def change
    change_column :corporations, :sales_2022, :string
    change_column :corporations, :profit_2022, :string
    change_column :corporations, :sales_2021, :string
    change_column :corporations, :profit_2021, :string
    change_column :corporations, :sales_2020, :string
    change_column :corporations, :profit_2020, :string
  end
end
