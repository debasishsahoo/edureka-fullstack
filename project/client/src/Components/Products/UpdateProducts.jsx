import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../../Services/Api";

const UpdateProducts = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await api.get(`/product/view/${id}`);
      setName(res.data.name);
      setDesc(res.data.desc);
      setPrice(res.data.price);
    };
    fetchProduct();
  }, [id]);

  

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/product/update/${id}`, {
        name:name,
        desc:desc,
        price:price,
    })
    setName('');
    setDesc('');
    setPrice('')
    navigate('/product')
    } catch (error) {
      setError(error.response?.data?.message || "Sign in Failed");
    }
  };

  return (
    <>
      <div className="register">
        <h2>Update Product</h2>
        <form onSubmit={updateProduct}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            required
          />
          <input
            type="text"
            name="desc"
            placeholder="Description"
            value={desc}
            onChange={(e)=>{setDesc(e.target.value)}}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={price}
            onChange={(e)=>{setPrice(e.target.value)}}
            required
          />
          <button type="submit">Update Product</button>
          <br/>
          <Link to={`/product`}>Product List</Link>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </>
  );
};

export default UpdateProducts;
