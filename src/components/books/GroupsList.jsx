import { useContext, useEffect } from "react";
import { BookContext } from "../../context/BookContext";
import MinBookCard from "./MinBookCard";
import { BLACK_50 } from "../../helpers/Colors";

const GroupsList = () => {
  const { groups, filteredBooks } = useContext(BookContext);

  const findAllGroupBooks = (groupId) => {
    return filteredBooks.filter((book) => book.group.includes(groupId));
  };

  return (
    <>
      {groups.map((group) =>
        findAllGroupBooks(group.id).length > 0 ? (
          <section className="row m-5">
            <h2
              className="col-1 h5 w-100 rounded-3 text-white p-2"
              style={{ backgroundColor: BLACK_50 }}
            >
              {group.name}
            </h2>
            <div className="row my-4">
              {findAllGroupBooks(group.id).map((book) => (
                <MinBookCard book={book} groups={groups} />
              ))}
            </div>
          </section>
        ) : null
      )}
    </>
  );
};

export default GroupsList;
