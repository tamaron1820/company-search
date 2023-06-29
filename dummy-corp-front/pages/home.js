import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchForm from './components/search-form';

const Home = ({ }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [companies, setCompanies] = useState([]);
  const [allCompanies, setAllCompanies] = useState([]);
  const [newCompany, setNewCompany] = useState({
    code: '',
    status: '',
    name: '',
    name_kana: '',
    postal_code: '',
    address: '',
    representative_name: '',
    representative_name_kana: '',
    phone: '',
    sales_2022: '',
    profit_2022: '',
    sales_2021: '',
    profit_2021: '',
    sales_2020: '',
    profit_2020: '',
  });


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/corporations');
        setCompanies(response.data.data);
        setAllCompanies(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (event) => {
    setNewCompany({ ...newCompany, [event.target.name]: event.target.value });
  };

  const handleDeleteCompany = async (companyId) => {
    try {
      await axios.delete(`http://localhost:3001/api/corporations/${companyId}`);
      setCompanies(companies.filter((company) => company.id !== companyId));
    } catch (error) {
      console.error(error);
    }
  };


  const handleAddCompany = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/corporations/create', {
        corporation: newCompany,
      });
      setCompanies([...companies, response.data.data]);
      setNewCompany({
        code: '',
        status: '',
        name: '',
        name_kana: '',
        postal_code: '',
        address: '',
        representative_name: '',
        representative_name_kana: '',
        phone: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleReset = () => {
    setCompanies(allCompanies);
  }
  const handleSearch = async (query, searchType) => {
    try {
      //const response = await axios.get(`http://localhost:3001/api/corporations?query=${query}&searchType=${searchType}`);
      const response = await axios.get(`http://localhost:3001/api/corporations/search?query=${query}&searchType=${searchType}`);
      setCompanies(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      {user.user.role === 'user' && (
        <div>
          <h1>企業情報</h1>
          <h2>一般ユーザ用UI</h2>
          <SearchForm onSearch={handleSearch} />
          <button onClick={handleReset}>全ての会社を表示</button>
          <ul>
            {companies.map((company) => (
              <li key={company.id}>
                {company.code} - {company.name} - {company.status} - {company.name_kana} - {company.postal_code} - {company.address} - {company.representative_name} - {company.representative_name_kana} - {company.phone}
              </li>
            ))}
          </ul>
        </div>
      )}
      {user.user.role === 'admin' && (
        <div>
          <h1>企業情報</h1>
          <h2>管理者用UI</h2>
          <SearchForm onSearch={handleSearch} />
          <button onClick={handleReset}>全ての会社を表示</button>
          <ul>
            {companies.map((company) => (
              <li key={company.id}>
                {company.code} - {company.name} - {company.status} - {company.name_kana} - {company.postal_code} - {company.address} - {company.representative_name} - {company.representative_name_kana} - {company.phone}
                <button onClick={() => handleDeleteCompany(company.id)}>削除</button>
              </li>
            ))}
          </ul>
          <h2>新規企業追加</h2>
          <input type="text" name="code" value={newCompany.code} onChange={handleInputChange} placeholder="企業コード" />
          <input type="text" name="status" value={newCompany.status} onChange={handleInputChange} placeholder="ステータス" />
          <input type="text" name="name" value={newCompany.name} onChange={handleInputChange} placeholder="企業名" />
          <input type="text" name="name_kana" value={newCompany.name_kana} onChange={handleInputChange} placeholder="企業名（カナ）" />
          <input type="text" name="postal_code" value={newCompany.postal_code} onChange={handleInputChange} placeholder="郵便番号" />
          <input type="text" name="address" value={newCompany.address} onChange={handleInputChange} placeholder="住所" />
          <input
            type="text"
            name="representative_name"
            value={newCompany.representative_name}
            onChange={handleInputChange}
            placeholder="代表者名"
          />
          <input
            type="text"
            name="representative_name_kana"
            value={newCompany.representative_name_kana}
            onChange={handleInputChange}
            placeholder="代表者名（カナ）"
          />

          <input type="text" name="phone" value={newCompany.phone} onChange={handleInputChange} placeholder="電話番号" />
          <input type="text" name="sales_2022" value={newCompany.sales_2022} onChange={handleInputChange} placeholder="売り上げ2022" />
          <input type="text" name="profit_2022" value={newCompany.profit_2022} onChange={handleInputChange} placeholder="利益2022" />
          <input type="text" name="sales_2021" value={newCompany.sales_2021} onChange={handleInputChange} placeholder="売り上げ2021" />
          <input type="text" name="profit_2021" value={newCompany.profit_2021} onChange={handleInputChange} placeholder="利益2021" />
          <input type="text" name="sales_2020" value={newCompany.sales_2020} onChange={handleInputChange} placeholder="売り上げ2020" />
          <input type="text" name="profit_2020" value={newCompany.profit_2020} onChange={handleInputChange} placeholder="利益2020" />

          <button onClick={handleAddCompany}>追加</button>
        </div>
      )}
    </div>
  );
};

export default Home;
