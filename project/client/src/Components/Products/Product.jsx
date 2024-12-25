import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import api from "../../Services/Api";

const Product = () => {
  const { user } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    name: "",
    desc: "",
    price: 0,
  });
  const [error, setError] = useState(null);
  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const handelChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/product/add", credentials);
      setAllProduct([...allProduct, res.data]);
      setCredentials({
        name: "",
        desc: "",
        price: 0,
      });
    } catch (error) {
      setError(error.response?.data?.message || "Sign in Failed");
    }
  };

  const fetchProduct = async () => {
    const res = await api.get("/product/view");
    setAllProduct(res.data);
  };

  const deleteProduct=async(id)=>{
    await api.delete(`/product/delete/${id}`);
    setAllProduct(allProduct.filter((product)=>product._id!==id))
  }

  return (
    <>
      <div className="register">
        <h2>Add Product</h2>
        <form onSubmit={addProduct}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={credentials.name}
            onChange={handelChange}
            required
          />
          <input
            type="text"
            name="desc"
            placeholder="Description"
            value={credentials.desc}
            onChange={handelChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={credentials.price}
            onChange={handelChange}
            required
          />
          <button type="submit">Add Product</button>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
      <br />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {allProduct.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <Link to={`/product/details/${product._id}`}>Details</Link>
              </td>
              <td>
                <Link to={`/product/update/${product._id}`}>Edit</Link>
              </td>
              <td>
               <button className="danger" onClick={()=>{deleteProduct(product._id)}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Product;
