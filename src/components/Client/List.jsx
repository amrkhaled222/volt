function List({ topic, li_1, li_2, li_3, li_4 }) {
  return (
    <ul className="w-1/2 md:w-fit font-plusj">
      <li className=" uppercase text-black mb-5">{topic}</li>
      <li className=" capitalize text-gray-500 mb-3 hover:cursor-pointer hover:text-black delay-100 hover:drop-shadow-md">
        {li_1}
      </li>
      <li className=" capitalize text-gray-500 mb-3 hover:cursor-pointer hover:text-black delay-100 hover:drop-shadow-md">
        {li_2}
      </li>
      <li className=" capitalize text-gray-500 mb-3 hover:cursor-pointer hover:text-black delay-100 hover:drop-shadow-md">
        {li_3}
      </li>
      <li className=" capitalize text-gray-500 mb-3 hover:cursor-pointer hover:text-black delay-100 hover:drop-shadow-md">
        {li_4}
      </li>
    </ul>
  );
}
export default List;
