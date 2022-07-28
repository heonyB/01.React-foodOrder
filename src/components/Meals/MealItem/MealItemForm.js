import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = () => {
  return (
    <form className={classes.form}>
      <Input
        label="수량"
        input={{
          type: 'number',
          id: 'amount',
          min: '1',
          max: '5',
          setp: '1',
          defaultValue: '1',
        }}
      />
      <button> 카트 담기 </button>
    </form>
  );
};

export default MealItemForm;
