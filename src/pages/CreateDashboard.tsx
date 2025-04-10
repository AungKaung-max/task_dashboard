import Breadcrumb from "../components/breadcrumbs";
import Layout from "../layouts/layout";

function CreateDashboard() {
  return (
    <Layout>
      <Breadcrumb 
        breadcrumbs={[
          { label: 'Boards', href: '/dashboard' },
          { label: 'Create Boards', href: '/dashboard/create', active: true },
        ]} 
    />
    
    </Layout>
  );
}

export default CreateDashboard;
