import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { DEKODOSURU_PASSWORD, TASK_ENUM } from "@/constants";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { StoreState } from "@/services";
const FormSchema = z.object({
  ans: z.string().min(2, {
    message: "Answer must be at least 2 characters.",
  }),

});

const DekodosuruForm = () => {
    const [value, setValue] = useState('')
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      ans: "",
    },
  });

  const onSubmit = (data) => {
    if(data.ans===DEKODOSURU_PASSWORD){
        setValue('lsf98sd')
        StoreState.tasks(TASK_ENUM.TASK_1,{
          status:'true'
      })
        toast({
            title:"Congratulations !!, ........"
        })

    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6 mx-auto">
        <FormField
          control={form.control}
          name="ans"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-400">Answer</FormLabel>
              <FormControl>
                <Input className="bg-transparent text-white" placeholder="...." {...field} />
              </FormControl>
              <FormDescription>
                Enter answer 🤔🤔.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-400">Your Clue : </FormLabel>
              <FormControl>
              {value ?<>
              <Badge>{value}</Badge>
              <p className="text-sm text-muted-foreground">*Notedown</p>
              </>:<>👎</>}
              
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          <p className="text-xl ">
            Enter 
          </p>
        </Button>
      </form>
    </Form>
  );
};

export default DekodosuruForm;