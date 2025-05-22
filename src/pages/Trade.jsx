
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MarketBanner from '../components/MarketBanner';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '../components/ui/form';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../components/ui/select';
import { Checkbox } from '../components/ui/checkbox';
import styles from './Trade.module.scss';

const formSchema = z.object({
  firstName: z.string().min(2, { message: 'First name must be at least 2 characters.' }),
  lastName: z.string().min(2, { message: 'Last name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  countryCode: z.string().min(1, { message: 'Please select a country code.' }),
  phoneNumber: z.string().min(5, { message: 'Please enter a valid phone number.' }),
  contactMethods: z.array(z.string()).min(1, { message: 'Please select at least one contact method.' }),
});

const countryCodes = [
  { value: '+1', label: 'United States (+1)' },
  { value: '+44', label: 'United Kingdom (+44)' },
  { value: '+33', label: 'France (+33)' },
  { value: '+49', label: 'Germany (+49)' },
  { value: '+81', label: 'Japan (+81)' },
  { value: '+86', label: 'China (+86)' },
  { value: '+91', label: 'India (+91)' },
  { value: '+61', label: 'Australia (+61)' },
  { value: '+7', label: 'Russia (+7)' },
  { value: '+55', label: 'Brazil (+55)' },
];

const Trade = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      countryCode: '',
      phoneNumber: '',
      contactMethods: [],
    },
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    // Here you would typically send the data to your API
    alert('Form submitted successfully! We will contact you shortly.');
    form.reset();
  };

  return (
    <>
      <Header />
      <MarketBanner 
        title="Open Your Real Trading Account" 
        description="Fill out the form below to create your account and start trading in minutes."
      />
      
      <div className={styles.tradeContent}>
        <div className={styles.container}>
          <div className={styles.formWrapper}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
                <div className={styles.formRow}>
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className={styles.formItem}>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className={styles.formItem}>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter your email address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className={styles.phoneGroup}>
                  <FormField
                    control={form.control}
                    name="countryCode"
                    render={({ field }) => (
                      <FormItem className={styles.countryCode}>
                        <FormLabel>Country Code</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {countryCodes.map((country) => (
                              <SelectItem key={country.value} value={country.value}>
                                {country.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem className={styles.phoneNumber}>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className={styles.contactMethodsGroup}>
                  <FormLabel className={styles.contactMethodsLabel}>Preferred Contact Method</FormLabel>
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
                                          checked={field.value?.includes('email')}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...field.value, 'email'])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== 'email'
                                                  )
                                                )
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className={styles.checkboxLabel}>Email</FormLabel>
                                    </div>
                                    
                                    <div className={styles.checkboxContainer}>
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes('whatsapp')}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...field.value, 'whatsapp'])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== 'whatsapp'
                                                  )
                                                )
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className={styles.checkboxLabel}>WhatsApp</FormLabel>
                                    </div>
                                    
                                    <div className={styles.checkboxContainer}>
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes('telegram')}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([...field.value, 'telegram'])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== 'telegram'
                                                  )
                                                )
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className={styles.checkboxLabel}>Telegram</FormLabel>
                                    </div>
                                  </>
                                )
                              }}
                            />
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className={styles.submitContainer}>
                  <Button type="submit" className={styles.submitButton}>
                    Create Account
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Trade;
