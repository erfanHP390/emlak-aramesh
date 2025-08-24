import Register from '@/components/templates/auth/register/Register';
import styles from './page.module.css';

export default function RegisterPage() {
  return (
    <>
      <head>
        <title>ثبت نام در سیستم مدیریت املاک آرامش | ایجاد حساب کاربری</title>
        <meta name="description" content="ثبت نام در پلتفرم جامع مدیریت املاک آرامش. با ثبت نام در سیستم، به ابزارهای مدیریت ملک، مشتریان و درخواست‌ها دسترسی پیدا کنید." />
        <meta name="keywords" content="ثبت نام املاک, سیستم مدیریت املاک, ایجاد حساب کاربری, نرم افزار املاک, ثبت نام مشاور املاک, پنل مدیریت املاک" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="https://uxwing.com/wp-content/themes/uxwing/download/buildings-architecture-real-estate/houses-icon.png" />
      </head>
      <Register />
    </>
  );
}