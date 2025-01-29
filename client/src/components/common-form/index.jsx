import { Button } from "../ui/button";
import FormControls from "./form-controls";
import PropTypes from 'prop-types';

CommonForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
  formControls: PropTypes.arrayOf(PropTypes.object).isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  isButtonDisabled: PropTypes.bool,
};

function CommonForm({
  handleSubmit,
  buttonText,
  formControls = [],
  formData,
  setFormData,
  isButtonDisabled = false,
}) {
  // ... previous code remains the same
  return (
    <form onSubmit={handleSubmit}>
      {/* render form controls here */}
      <FormControls
        formControls={formControls}
        formData={formData}
        setFormData={setFormData}
      />
      <Button disabled={isButtonDisabled} type="submit" className="mt-5 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default CommonForm;
