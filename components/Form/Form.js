import { Button } from "@chakra-ui/react";
import NumberInput from "./NumberInput";
import { stats } from "../../utils";

const Form = (props) => {
  return (
    <form>
      {stats.map(stat => <NumberInput id={stat.id} label={stat.label} key={stat.id}/>)}
        <Button type="submit">Calculate</Button>
        <Button>Clear All</Button>
    </form>
  );
};

export default Form;
