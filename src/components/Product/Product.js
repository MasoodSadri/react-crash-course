import './Product.css'

const Product = ({ product, onDelete }) => {
  return (
    <div className="product">
      <div>{product.title}</div>
      <div>
        <button className="btn" onClick={() => onDelete(product.id)}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default Product
