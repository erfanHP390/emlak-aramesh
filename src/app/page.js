import Register from '@/components/templates/auth/register/Register';
import styles from './page.module.css';

export const metadata = {
  title: "ثبت نام در سیستم مدیریت املاک آرامش | ایجاد حساب کاربری",
  description: "ثبت نام در پلتفرم جامع مدیریت املاک آرامش. با ثبت نام در سیستم، به ابزارهای مدیریت ملک، مشتریان و درخواست‌ها دسترسی پیدا کنید.",
  keywords: "ثبت نام املاک, سیستم مدیریت املاک, ایجاد حساب کاربری, نرم افزار املاک, ثبت نام مشاور املاک, پنل مدیریت املاک",
  authors: [{ name: "املاک آرامش" }],
  robots: "noindex, nofollow", // صفحات ثبت نام معمولا نباید ایندکس شوند
};

export default function RegisterPage() {
  return (
    <>
      <Register />
    </>
  );
}