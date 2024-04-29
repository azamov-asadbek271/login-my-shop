import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

function ResipiesList({ recipies }) {
  return (
    <div className="flex justify-between gap-3  flex-wrap ">
      {recipies.map((res) => {
        return (
          <div
            key={res.id}
            className=" lg:w-80  w-64 flex justify-between flex-col rounded bg-base-300 mb-6"
          >
            <div className="p-4">
              {/* button */}
              <div className="delete-box w-full justify-end flex ">
                <MdDelete className="text-3xl" />
              </div>
              {/* title */}
              <h1 className="text-2xl mb-3">{res.title}</h1>
              {/* method */}
              <p className="line-clamp-3 mb-5">{res.method}</p>
              {/* time */}
              <div className="Link-Box flex justify-end items-center gap-2 mb-4">
                <Link
                  to={`/singleRecipies/${res.id}`}
                  className=" bg-emerald-400  p-[6px] rounded flex items-center "
                >
                  <p className="text-white">Read More</p>
                </Link>
                <p className="p-1 bg-orange-400 rounded">
                  {res.cookingTime} Minutes
                </p>
              </div>
            </div>
            <div className="">
              <img
                className=" w-full h-52 flex object-cover rounded"
                src={res.image}
                alt=""
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ResipiesList

//  <div key={res.id} className="card w-80 bg-base-100 shadow-xl  mb-5">
//             <div className="card-body">
//              
//               <p className="flex gap-2">
//                 {res.ingredients.map((ing) => {
//                   return <span key={ing}>{ing},</span>;
//                 })}
//               </p>
//             </div>
//             <figure>
//               <img className="rounded" src={res.image} alt="Shoes" />
//             </figure>
//           </div>