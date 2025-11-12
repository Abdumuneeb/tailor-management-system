import TopHeader from "@/components/TopHeader";
import SideBar from "@/components/SideBar";
import styles from "@/styles/dashboardLayout.module.scss";

async function DashboardLayout({ children }: any) {
  return (
    <div>
      <aside className={styles.sideBar}>
        <div className={styles.logo}>
          <img src="/logo-white.png" alt="" />
        </div>
        <SideBar />
      </aside>
      <header>
        <TopHeader />
      </header>

      <main className={styles.main}>{children}</main>

      <footer>{/* <DashboardFooter /> */}</footer>
    </div>
  );
}

export default DashboardLayout;
