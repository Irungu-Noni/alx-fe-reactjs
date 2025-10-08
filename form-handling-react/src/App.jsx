import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Fisrt Task: Form Handling</h1>

      <div style={{ marginBottom: '40px' }}>
        <RegistrationForm />
      </div>

      <div>
        <FormikForm />
      </div>
    </div>
  );
}

export default App;