import Item from "./Item.jsx";

export default function Items(props) {
  const { items } = props;

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {items.length > 0 ?
        items.map(item =>
          (<Item key={item.mainId} {...item} />)
        )
        :
        <h4 className='col-span-full text-center'>No Items!</h4>
      }
    </div>
  )
}
