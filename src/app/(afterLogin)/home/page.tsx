import Post from "../_components/Post";
import PostForm from "./_components/PostForm";
import Tab from "./_components/Tab";
import TabProvider from "./_components/TabProvider";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  );
}
