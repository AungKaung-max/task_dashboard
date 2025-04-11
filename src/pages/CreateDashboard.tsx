import Breadcrumb from "../components/breadcrumbs";
import CreateBoardForm from "../components/create-form";
import Layout from "../layouts/layout";

function CreateDashboard() {
  return (
    <Layout>
      <Breadcrumb
        breadcrumbs={[
          { label: "Boards", href: "/dashboard" },
          { label: "Create Boards", href: "/dashboard/create", active: true },
        ]}
      />

      <CreateBoardForm />
    </Layout>
  );
}

export default CreateDashboard;
