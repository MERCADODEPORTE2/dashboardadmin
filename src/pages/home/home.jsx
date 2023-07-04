import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./styles.module.css";
import Container from "../../components/container/container";
import Pages from "../../components/paginated/paginated";
import { getProducts } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  // console.log(products);

  // ---------- pages -----------
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);
  // -----------------------------

  useEffect(() => {
    if (!products.length) {
      dispatch(getProducts());
    }
  }, []);

  return (
    <div className={styles.home}>
      <Container products={currentPosts} />
      <Pages
        totalPosts={products.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Home;
