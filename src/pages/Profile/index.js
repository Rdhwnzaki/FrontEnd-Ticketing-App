// const [photo_product, setPhoto] = useState(null);

// const [inputData, setInputData] = useState({
//   name_product: "",
//   stock_product: "",
//   price_product: "",
//   category_id: "",
//   search: "",
// });
// const token = localStorage.getItem("token");
// const user = {
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// };
// const putForm = (e) => {
//   e.preventDefault();
//   const formData = new FormData();
//   formData.append("name_product", inputData.name_product);
//   formData.append("stock_product", inputData.stock_product);
//   formData.append("price_product", inputData.price_product);
//   formData.append("category_id", inputData.category_id);
//   formData.append("photo_product", photo_product);
//   console.log(formData);
//   axios
//     .put(`http://localhost:3006/auth/update`, formData, user, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     })
//     .then((res) => {
//       console.log("update Data Success");
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log("update Data Fail");
//       console.log(err);
//     });
// };
