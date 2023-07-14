import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getTags, getColors, getSizes } from "../../redux/actions";

import Container from "../../components/container/container";
import Pages from "../../components/paginated/paginated";

import styles from "./styles.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const tags = useSelector((state) => state.tags);
  const sizes = useSelector((state) => state.sizes);
  const colors = useSelector((state) => state.colors);

  const [order, setOrder] = useState("");

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
    if (!colors.length) {
      dispatch(getColors());
    }
    if (!tags.length) {
      dispatch(getTags());
    }
    if (!sizes.length) {
      dispatch(getSizes());
    }
  }, [order, colors, tags, sizes, dispatch]);
  return (
    <div className={styles.home}>
      <Container
        tags={tags}
        colors={colors}
        sizes={sizes}
        setOrder={setOrder}
        products={currentPosts}
      />
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
