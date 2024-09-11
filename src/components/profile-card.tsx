interface Phone {
    id: number;
    name: string;
    storage: string;
    color?: string;
    model?: string;
    price: string;
    discount?: string | null;
    previous_price?: string | null;
    label?: string | null;
    image: string;
  }
  
  export const ProfileCard: React.FC<Phone> = ({ 
    name, 
    storage, 
    color, 
    model, 
    price, 
    discount, 
    previous_price, 
    label, 
    image 
  }) => {
    return (
      <div className=" w-[350px] h-[400px] shadow-lg shadow-gray-400 hover:shadow-md  flex flex-col items-start p-8 gap-1 border-2 rounded-xl">
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p>Storage: {storage}</p>
        {color && <p>Color: {color}</p>}
        {model && <p>Model: {model}</p>}
        <p>Price: {price}</p>
        {previous_price && <p>Previous Price: {previous_price}</p>}
        {discount && <p>Discount: {discount}</p>}
        {label && <p>Label: {label}</p>}
      </div>
    );
  };
  