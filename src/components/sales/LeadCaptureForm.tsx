import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle } from "lucide-react";

const leadSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres").max(100),
  whatsapp: z
    .string()
    .regex(
      /^(\+55\s?)?(\(?\d{2}\)?[\s-]?)?\d{4,5}[\s-]?\d{4}$/,
      "WhatsApp inválido. Use formato: (11) 99999-9999"
    ),
});

type LeadFormData = z.infer<typeof leadSchema>;

interface LeadCaptureFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  planSelected: "mensal" | "anual";
  planPrice: string;
}

const LeadCaptureForm = ({
  open,
  onOpenChange,
  planSelected,
  planPrice,
}: LeadCaptureFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
    },
  });

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("sales_leads").insert({
        name: data.name,
        whatsapp: data.whatsapp,
        plan_selected: planSelected,
      });

      if (error) throw error;

      setIsSuccess(true);
      toast({
        title: "Cadastro realizado!",
        description: "Em breve entraremos em contato pelo WhatsApp.",
      });

      // Redirect to WhatsApp after 2 seconds
      setTimeout(() => {
        const message = encodeURIComponent(
          `Olá! Me chamo ${data.name} e tenho interesse no plano ${planSelected} de ${planPrice}/mês.`
        );
        window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
        onOpenChange(false);
        setIsSuccess(false);
        form.reset();
      }, 2000);
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-xl">
            Quase lá! 🎉
          </DialogTitle>
          <DialogDescription>
            Preencha seus dados para continuar com o plano{" "}
            <span className="font-semibold text-primary capitalize">
              {planSelected}
            </span>{" "}
            de <span className="font-semibold">{planPrice}/mês</span>
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8 gap-4">
            <CheckCircle className="h-16 w-16 text-green-500 animate-pulse" />
            <p className="text-center text-muted-foreground">
              Redirecionando para o WhatsApp...
            </p>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Seu nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="whatsapp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>WhatsApp</FormLabel>
                    <FormControl>
                      <Input placeholder="(11) 99999-9999" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                variant="hero"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Continuar no WhatsApp"
                )}
              </Button>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureForm;
