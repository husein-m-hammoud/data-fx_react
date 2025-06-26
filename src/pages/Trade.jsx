import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MarketBanner from '../components/MarketBanner';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '../components/ui/form';
import { sendEmail } from '../api/email';

import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '../components/ui/select';
import { Checkbox } from '../components/ui/checkbox';
import { toast } from 'sonner';
import styles from './Trade.module.scss';
import { useTranslation } from '../contexts/TranslationContext';
import { countryCodes } from '../lib/countryCodes';

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'First name must be at least 2 characters.' }),
  lastName: z
    .string()
    .min(2, { message: 'Last name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  countryCode: z.string().min(1),
  phoneNumber: z
    .string()
    .min(5, { message: 'Please enter a valid phone number.' }),
  contactMethods: z
    .array(z.string())
    .min(1, { message: 'Please select at least one contact method.' }),
});

const Trade = () => {
  const { t } = useTranslation();
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

  const onSubmit = async (data) => {
    const code = data.countryCode.split('-')[0];
    const payload = {
      email_form: 'Trading Account',
      from_email: data.email,
      first_name: data.firstName,
      last_name: data.lastName,
      phone: `${code} ${data.phoneNumber}`,
      contact_methods: data.contactMethods,
    };

    try {
      await sendEmail(payload);
      toast.success('Your request was sent successfully!', {
        description: 'We will contact you shortly.',
      });
      form.reset();
    } catch (error) {
      console.error('Send email error:', error);
      toast.error('Failed to send request', {
        description: error.message || 'Something went wrong.',
      });
    }
  };

  return (
    <>
      <Header />
      <MarketBanner
        title={t('openYourAccount')}
        description={t('openYourAccountDesc')}
      />

      <div className={styles.tradeContent}>
        <div className={styles.container}>
          <div className={styles.formWrapper}>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={styles.form}
              >
                <div className={styles.formRow}>
                  <FormField
                    control={form.control}
                    name='firstName'
                    render={({ field }) => (
                      <FormItem className={styles.formItem}>
                        <FormLabel className={styles.formLabel}>
                          {t('firstName')}
                        </FormLabel>
                        <FormControl>
                          <Input className={styles.formInput} {...field} />
                        </FormControl>
                        <FormMessage className={styles.formMessage} />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='lastName'
                    render={({ field }) => (
                      <FormItem className={styles.formItem}>
                        <FormLabel className={styles.formLabel}>
                          {t('lastName')}
                        </FormLabel>
                        <FormControl>
                          <Input className={styles.formInput} {...field} />
                        </FormControl>
                        <FormMessage className={styles.formMessage} />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={styles.formLabel}>
                        {t('email')}
                      </FormLabel>
                      <FormControl>
                        <Input
                          className={styles.formInput}
                          type='email'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className={styles.formMessage} />
                    </FormItem>
                  )}
                />

                <div className={styles.phoneGroup}>
                  <FormField
                    control={form.control}
                    name='countryCode'
                    render={({ field }) => (
                      <FormItem className={styles.formItem}>
                        <FormLabel className={styles.formLabel}>
                          {t('countryCode')}
                        </FormLabel>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger className={styles.formInput}>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {countryCodes.map((country, index) => (
                                <SelectItem
                                  key={`${country.label}-${index}`}
                                  value={`${country.value}-${country.label}`}
                                >
                                  {country.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage className={styles.formMessage} />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name='phoneNumber'
                    render={({ field }) => (
                      <FormItem className={styles.phoneNumber}>
                        <FormLabel className={styles.formLabel}>
                          {t('phone')}
                        </FormLabel>
                        <FormControl>
                          <Input className={styles.formInput} {...field} />
                        </FormControl>
                        <FormMessage className={styles.formMessage} />
                      </FormItem>
                    )}
                  />
                </div>

                <div className={styles.contactMethodsGroup}>
                  <FormLabel className={styles.contactMethodsLabel}>
                    {t('preferredContact')}
                  </FormLabel>
                  <div className={styles.checkboxGroup}>
                    <FormField
                      control={form.control}
                      name='contactMethods'
                      render={() => (
                        <FormItem className={styles.checkboxItem}>
                          <div className={styles.checkboxWrapper}>
                            <Controller
                              name='contactMethods'
                              control={form.control}
                              render={({ field }) => (
                                <>
                                  {['email', 'whatsapp', 'telegram'].map(
                                    (method) => (
                                      <div
                                        key={method}
                                        className={styles.checkboxContainer}
                                      >
                                        <FormControl>
                                          <Checkbox
                                            className={styles.checkbox}
                                            checked={field.value?.includes(
                                              method
                                            )}
                                            onCheckedChange={(checked) =>
                                              checked
                                                ? field.onChange([
                                                    ...field.value,
                                                    method,
                                                  ])
                                                : field.onChange(
                                                    field.value?.filter(
                                                      (v) => v !== method
                                                    )
                                                  )
                                            }
                                          />
                                        </FormControl>
                                        <FormLabel
                                          className={styles.checkboxLabel}
                                        >
                                          {t(method)}
                                        </FormLabel>
                                      </div>
                                    )
                                  )}
                                </>
                              )}
                            />
                          </div>
                          <FormMessage className={styles.formMessage} />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className={styles.submitContainer}>
                  <Button type='submit' className={styles.submitButton}>
                    {t('createAccount')}
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
