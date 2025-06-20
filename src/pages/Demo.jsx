import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { toast } from "sonner";
import styles from "./BecomeBroker.module.scss";
import { sendEmail } from "../api/email";

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(5, { message: "Please enter a valid phone number." }),
  contactMethods: z
    .array(z.string())
    .min(1, { message: "Please select at least one contact method." }),
});

const Demo = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      contactMethods: [],
    },
  });

  const onSubmit = async (data) => {
    const payload = {
      email_form: "Demo Account", // Static sender
      from_email: data.email,
      first_name: data.firstName,
      last_name: data.lastName,
      phone: data.phone,
      contact_methods: data.contactMethods,
    };

    try {
      await sendEmail(payload);
      toast.success("Application submitted successfully!", {
        description:
          "We will contact you shortly to discuss your IB application.",
      });
      form.reset();
    } catch (error) {
      console.error("Send email error:", error);
      toast.error("Failed to send application", {
        description: error.message || "Something went wrong.",
      });
    }
  };

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.heroContainer}>
            <h1 className={styles.heroTitle}>
              Request Your Demo Account with Data FX
            </h1>
            <p className={styles.heroDescription}>
              Experience the power of Data FX's trading platform with a free
              Demo Account. Practice your trading strategies in real market
              conditions without any risk. Open your demo account today and get
              started on your trading journey!
            </p>
          </div>
        </section>

        <section className={styles.formSection}>
          <div className={styles.formContainer}>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={styles.form}
              >
                <div className={styles.formRow}>
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className={styles.formItem}>
                        <FormLabel className={styles.formLabel}>
                          First Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            className={styles.formInput}
                            placeholder="Enter your first name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className={styles.formMessage} />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className={styles.formItem}>
                        <FormLabel className={styles.formLabel}>
                          Last Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            className={styles.formInput}
                            placeholder="Enter your last name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className={styles.formMessage} />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={styles.formLabel}>Email</FormLabel>
                      <FormControl>
                        <Input
                          className={styles.formInput}
                          type="email"
                          placeholder="Enter your email address"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className={styles.formMessage} />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={styles.formLabel}>Phone</FormLabel>
                      <FormControl>
                        <Input
                          className={styles.formInput}
                          placeholder="Enter your phone number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className={styles.formMessage} />
                    </FormItem>
                  )}
                />

                <div className={styles.contactMethodsGroup}>
                  <FormLabel className={styles.contactMethodsLabel}>
                    Preferred Contact Method
                  </FormLabel>
                  <div className={styles.checkboxGroup}>
                    <FormField
                      control={form.control}
                      name="contactMethods"
                      render={() => (
                        <FormItem className={styles.checkboxItem}>
                          <div className={styles.checkboxWrapper}>
                            <Controller
                              name="contactMethods"
                              control={form.control}
                              render={({ field }) => {
                                return (
                                  <>
                                    <div className={styles.checkboxContainer}>
                                      <FormControl>
                                        <Checkbox
                                          className={styles.checkbox}
                                          checked={field.value?.includes(
                                            "email"
                                          )}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([
                                                  ...field.value,
                                                  "email",
                                                ])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== "email"
                                                  )
                                                );
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel
                                        className={styles.checkboxLabel}
                                      >
                                        Email
                                      </FormLabel>
                                    </div>

                                    <div className={styles.checkboxContainer}>
                                      <FormControl>
                                        <Checkbox
                                          className={styles.checkbox}
                                          checked={field.value?.includes(
                                            "phone"
                                          )}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([
                                                  ...field.value,
                                                  "phone",
                                                ])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== "phone"
                                                  )
                                                );
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel
                                        className={styles.checkboxLabel}
                                      >
                                        Phone
                                      </FormLabel>
                                    </div>

                                    <div className={styles.checkboxContainer}>
                                      <FormControl>
                                        <Checkbox
                                          className={styles.checkbox}
                                          checked={field.value?.includes(
                                            "whatsapp"
                                          )}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([
                                                  ...field.value,
                                                  "whatsapp",
                                                ])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) =>
                                                      value !== "whatsapp"
                                                  )
                                                );
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel
                                        className={styles.checkboxLabel}
                                      >
                                        WhatsApp
                                      </FormLabel>
                                    </div>
                                  </>
                                );
                              }}
                            />
                          </div>
                          <FormMessage className={styles.formMessage} />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className={styles.submitContainer}>
                  <Button type="submit" className={styles.submitButton}>
                    Submit
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Demo;
