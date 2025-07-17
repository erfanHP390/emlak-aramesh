import connectToDB from "@/configs/db";
import { authUser } from "@/utils/authUser";
import { redirect } from "next/navigation";
import React from "react";
import styles from "@/styles/dashboard.module.css";
import PanelLayout from "@/components/layouts/PanelLayout";

async function page() {
  connectToDB();
  const user = await authUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <>
      <PanelLayout>
        <>
          {/* Content Wrapper. Contains page content */}
          <div className="content-wrapper">
            <div className="container-full">
              {/* Main content */}
              <section className="content">
                <div className="row">
                  <div className="col-xl-3 col-md-6 col-12">
                    <div className="box">
                      <div className="box-body">
                        <div className="d-flex justify-content-between align-items-center">
                          <h3 className="fw-700 mt-0">
                            4,789
                            <span className="text-muted">
                              <small> / ماهیانه</small>
                            </span>
                          </h3>
                          <div className="text-danger fw-700 d-flex justify-content-between align-items-center">
                            <i className="mdi mdi-chevron-down mdi-24px" />{" "}
                            <span>
                              <small>58.7%</small>
                            </span>
                          </div>
                        </div>
                        <h4 className="text-primary">کل درآمد</h4>
                        <canvas id="customer" />
                        <p className="mb-5">+14.17% ماه گذشته</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6 col-12">
                    <div className="box">
                      <div className="box-body">
                        <div className="d-flex justify-content-between align-items-center">
                          <h3 className="fw-700 mt-0">
                            8,695
                            <span className="text-muted">
                              <small> / ماهیانه</small>
                            </span>
                          </h3>
                          <div className="text-success fw-700 d-flex justify-content-between align-items-center">
                            <i className="mdi mdi-chevron-up mdi-24px" />{" "}
                            <span>
                              <small>97.5%</small>
                            </span>
                          </div>
                        </div>
                        <h4 className="text-primary">کل بازدیدکنندگان</h4>
                        <canvas id="orders" />
                        <p className="mb-5">-5.18% ماه گذشته</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6 col-12">
                    <div className="box">
                      <div className="box-body">
                        <div className="d-flex justify-content-between align-items-center">
                          <h3 className="fw-700 mt-0">
                            78%
                            <span className="text-muted">
                              <small> / ماهیانه</small>
                            </span>
                          </h3>
                          <div className="text-success fw-700 d-flex justify-content-between align-items-center">
                            <i className="mdi mdi-chevron-up mdi-24px" />{" "}
                            <span>
                              <small>89.13%</small>
                            </span>
                          </div>
                        </div>
                        <h4 className="text-primary">کل رزروها</h4>
                        <canvas id="growth" />
                        <p className="mb-5">+12.2% ماه گذشته</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6 col-12">
                    <div className="box">
                      <div className="box-body">
                        <div className="d-flex justify-content-between align-items-center">
                          <h3 className="fw-700 mt-0">
                            {" "}
                            42.000
                            <span className="text-muted">
                              <small> / ماهیانه</small>
                            </span>
                          </h3>
                          <div className="text-danger fw-700 d-flex justify-content-between align-items-center">
                            <i className="mdi mdi-chevron-down mdi-24px" />{" "}
                            <span>
                              <small>56.48%</small>
                            </span>
                          </div>
                        </div>
                        <h4 className="text-primary">سود</h4>
                        <canvas id="revenue" />
                        <p className="mb-5">+11.00% ماه گذشته</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-4">
                    <div className="box">
                      <div className="box-header with-border">
                        <h4 className="box-title">فعالیت های روزانه</h4>
                      </div>
                      <div className="box-body">
                        <div id="flotPie2" style={{ height: 285 }} />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-4">
                    <div className="box">
                      <div className="box-header with-border">
                        <h4 className="box-title">وضعیت رزروها</h4>
                      </div>
                      <div className="box-body">
                        <div id="bookingstatus" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-xl-4">
                    <div className="box">
                      <div className="box-header with-border">
                        <h4 className="box-title">سود</h4>
                      </div>
                      <div className="box-body">
                        <div id="revenue2" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-12">
                    <div className="row">
                      <div className="col-md-6 col-12">
                        <div className="box box-body pb-10 bs-4 border-info pull-up">
                          <h6 className="text-uppercase">در انتظار</h6>
                          <div className="d-flex justify-content-between">
                            <span className=" fs-30">154</span>
                            <span className="fs-30 text-info mdi mdi-city" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="box box-body pb-10 bs-4 border-primary pull-up">
                          <h6 className="text-uppercase">کامل شده</h6>
                          <div className="d-flex justify-content-between">
                            <span className=" fs-30">412</span>
                            <span className="fs-30 text-primary mdi mdi-seal" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="box box-body pb-10 bs-4 border-danger pull-up">
                          <h6 className="text-uppercase">بازرگانی</h6>
                          <div className="d-flex justify-content-between">
                            <span className=" fs-30">125</span>
                            <span className="fs-30 text-danger mdi mdi-city" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                        <div className="box box-body pb-10 bs-4 border-warning pull-up">
                          <h6 className="text-uppercase">بررسی شده</h6>
                          <div className="d-flex justify-content-between">
                            <span className=" fs-30">256</span>
                            <span className="fs-30 text-warning mdi mdi-home" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box box-widget widget-user-4">
                      <div
                        className="widget-user-header"
                        style={{
                          background: 'url("images/photo1.png") center center',
                        }}
                      >
                        <div className="overlay dark">
                          <div className="widget-user-image">
                            <img
                              className="rounded-circle"
                              src="images/user1-128x128.jpg"
                              alt="User Avatar"
                            />
                          </div>
                          <h3 className="widget-user-username text-white">
                            مختار مینائی
                          </h3>
                          <h6 className="widget-user-desc text-white">
                            فول استک{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="box-footer">
                        <div className="row">
                          <div className="col-sm-4 border-start">
                            <div className="description-block">
                              <h5 className="description-header">12K</h5>
                              <span className="description-text">کل</span>
                            </div>
                          </div>
                          <div className="col-sm-4 border-start">
                            <div className="description-block">
                              <h5 className="description-header">550</h5>
                              <span className="description-text">پروژه ها</span>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="description-block">
                              <h5 className="description-header">1158</h5>
                              <span className="description-text">سفارشی</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8 col-12">
                    <div className="box">
                      <div className="box-header with-border">
                        <h4 className="box-title">بازدید املاک</h4>
                      </div>
                      <div className="box-body pt-10">
                        <div className="table-responsive">
                          <table className="table product-overview mb-0">
                            <thead>
                              <tr>
                                <th>مشتری</th>
                                <th>سفارش ID</th>
                                <th>ملک</th>
                                <th>نوع</th>
                                <th>تاریخ</th>
                                <th>وضعیت</th>
                                <th>عملیات</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>مختار مینائی</td>
                                <td>#8457125</td>
                                <td>خرید</td>
                                <td>کارت</td>
                                <td>10-7-2019</td>
                                <td>
                                  {" "}
                                  <span className="label label-success">
                                    بدهکار
                                  </span>{" "}
                                </td>
                                <td>
                                  <a
                                    href="javascript:void(0)"
                                    className="text-dark pe-10"
                                    data-bs-toggle="tooltip"
                                    title="ویرایش"
                                  >
                                    <i className="ti-marker-alt" />
                                  </a>
                                  <a
                                    href="javascript:void(0)"
                                    className="text-dark"
                                    data-bs-toggle="tooltip"
                                    title="حذف"
                                  >
                                    <i className="ti-trash" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>رحیم رضایی</td>
                                <td>#96523154</td>
                                <td>خرید</td>
                                <td>شبا</td>
                                <td>09-7-2019</td>
                                <td>
                                  {" "}
                                  <span className="label label-warning">
                                    پرداخت شده
                                  </span>{" "}
                                </td>
                                <td>
                                  <a
                                    href="javascript:void(0)"
                                    className="text-dark pe-10"
                                    data-bs-toggle="tooltip"
                                    title="ویرایش"
                                  >
                                    <i className="ti-marker-alt" />
                                  </a>
                                  <a
                                    href="javascript:void(0)"
                                    className="text-dark"
                                    data-bs-toggle="tooltip"
                                    title="حذف"
                                  >
                                    <i className="ti-trash" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>رضا نیکزاد</td>
                                <td>#95487512</td>
                                <td>دوبلکس</td>
                                <td>رهن</td>
                                <td>08-7-2019</td>
                                <td>
                                  {" "}
                                  <span className="label label-success">
                                    پرداخت شده
                                  </span>{" "}
                                </td>
                                <td>
                                  <a
                                    href="javascript:void(0)"
                                    className="text-dark pe-10"
                                    data-bs-toggle="tooltip"
                                    title="ویرایش"
                                  >
                                    <i className="ti-marker-alt" />
                                  </a>
                                  <a
                                    href="javascript:void(0)"
                                    className="text-dark"
                                    data-bs-toggle="tooltip"
                                    title="حذف"
                                  >
                                    <i className="ti-trash" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>مختار مینائی</td>
                                <td>#75485426</td>
                                <td>خرید</td>
                                <td>مغاز</td>
                                <td>02-7-2019</td>
                                <td>
                                  {" "}
                                  <span className="label label-danger">
                                    ناموفق
                                  </span>{" "}
                                </td>
                                <td>
                                  <a
                                    href="javascript:void(0)"
                                    className="text-dark pe-10"
                                    data-bs-toggle="tooltip"
                                    title="ویرایش"
                                  >
                                    <i className="ti-marker-alt" />
                                  </a>
                                  <a
                                    href="javascript:void(0)"
                                    className="text-dark"
                                    data-bs-toggle="tooltip"
                                    title="حذف"
                                  >
                                    <i className="ti-trash" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>زهرا باغدار</td>
                                <td>#8457125</td>
                                <td>خرید</td>
                                <td>ویلا</td>
                                <td>10-7-2019</td>
                                <td>
                                  {" "}
                                  <span className="label label-success">
                                    پرداخت شده
                                  </span>{" "}
                                </td>
                                <td>
                                  <a
                                    href="javascript:void(0)"
                                    className="text-dark pe-10"
                                    data-bs-toggle="tooltip"
                                    title="ویرایش"
                                  >
                                    <i className="ti-marker-alt" />
                                  </a>
                                  <a
                                    href="javascript:void(0)"
                                    className="text-dark"
                                    data-bs-toggle="tooltip"
                                    title="حذف"
                                  >
                                    <i className="ti-trash" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>رامین حامدی</td>
                                <td>#96523154</td>
                                <td>خرید</td>
                                <td>مغازه</td>
                                <td>09-7-2019</td>
                                <td>
                                  {" "}
                                  <span className="label label-warning">
                                    پرداخت شده
                                  </span>{" "}
                                </td>
                                <td>
                                  <a
                                    href="javascript:void(0)"
                                    className="text-dark pe-10"
                                    data-bs-toggle="tooltip"
                                    title="ویرایش"
                                  >
                                    <i className="ti-marker-alt" />
                                  </a>
                                  <a
                                    href="javascript:void(0)"
                                    className="text-dark"
                                    data-bs-toggle="tooltip"
                                    title="حذف"
                                  >
                                    <i className="ti-trash" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>میلاد همتی</td>
                                <td>#95487512</td>
                                <td>دوبلکس</td>
                                <td>اجاره</td>
                                <td>08-7-2019</td>
                                <td>
                                  {" "}
                                  <span className="label label-success">
                                    ناموفق
                                  </span>{" "}
                                </td>
                                <td>
                                  <a
                                    href="javascript:void(0)"
                                    className="text-dark pe-10"
                                    data-bs-toggle="tooltip"
                                    title="ویرایش"
                                  >
                                    <i className="ti-marker-alt" />
                                  </a>
                                  <a
                                    href="javascript:void(0)"
                                    className="text-dark"
                                    data-bs-toggle="tooltip"
                                    title="حذف"
                                  >
                                    <i className="ti-trash" />
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>مهرداد ساعدی</td>
                                <td>#75485426</td>
                                <td>خرید</td>
                                <td>ویلا</td>
                                <td>02-7-2019</td>
                                <td>
                                  {" "}
                                  <span className="label label-danger">
                                    ناموفق
                                  </span>{" "}
                                </td>
                                <td>
                                  <a
                                    href="javascript:void(0)"
                                    className="text-dark pe-10"
                                    data-bs-toggle="tooltip"
                                    title="ویرایش"
                                  >
                                    <i className="ti-marker-alt" />
                                  </a>
                                  <a
                                    href="javascript:void(0)"
                                    className="text-dark"
                                    data-bs-toggle="tooltip"
                                    title="حذف"
                                  >
                                    <i className="ti-trash" />
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* /.content */}
            </div>
          </div>
          {/* /.content-wrapper */}
          <footer className="main-footer">
            <div className="pull-right d-none d-sm-inline-block">
              <ul className="nav nav-primary nav-dotted nav-dot-separated justify-content-center justify-content-md-end">
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0)">
                    سوالات
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.fudatco.com/">
                    خرید
                  </a>
                </li>
              </ul>
            </div>
            © 2023{" "}
            <a href="https://www.fudatco.com/">هلدینگ فنی مهندسی فوداتکو</a>.
            تمامی حقوق محفوظ است.
          </footer>
          {/* Control Sidebar */}
          <aside className="control-sidebar">
            <div className="rpanel-title">
              <span className="pull-right btn btn-circle btn-danger">
                <i
                  className="ion ion-close text-white"
                  data-toggle="control-sidebar"
                />
              </span>{" "}
            </div>
            {/* Create the tabs */}
            <ul className="nav nav-tabs control-sidebar-tabs">
              <li className="nav-item">
                <a
                  href="#control-sidebar-home-tab"
                  data-bs-toggle="tab"
                  className="active"
                >
                  <i className="mdi mdi-message-text" />
                </a>
              </li>
              <li className="nav-item">
                <a href="#control-sidebar-settings-tab" data-bs-toggle="tab">
                  <i className="mdi mdi-playlist-check" />
                </a>
              </li>
            </ul>
            {/* Tab panes */}
            <div className="tab-content">
              {/* Home tab content */}
              <div className="tab-pane active" id="control-sidebar-home-tab">
                <div className="flexbox">
                  <a href="javascript:void(0)" className="text-grey">
                    <i className="ti-more" />
                  </a>
                  <p>کاربران</p>
                  <a href="javascript:void(0)" className="text-end text-grey">
                    <i className="ti-plus" />
                  </a>
                </div>
                <div className="lookup lookup-sm lookup-right d-none d-lg-block">
                  <input
                    type="text"
                    name="s"
                    placeholder="جستجو ..."
                    className="w-p100"
                  />
                </div>
                <div className="media-list media-list-hover mt-20">
                  <div className="media py-10 px-0">
                    <a className="avatar avatar-lg status-success" href="#">
                      <img src="images/avatar/1.jpg" alt="..." />
                    </a>
                    <div className="media-body">
                      <p className="fs-16">
                        <a className="hover-primary" href="#">
                          <strong>سایه رحیمی</strong>
                        </a>
                      </p>
                      <p>مدیریت تیکت ها را..</p>
                      <span>همین الان</span>
                    </div>
                  </div>
                  <div className="media py-10 px-0">
                    <a className="avatar avatar-lg status-danger" href="#">
                      <img src="images/avatar/2.jpg" alt="..." />
                    </a>
                    <div className="media-body">
                      <p className="fs-16">
                        <a className="hover-primary" href="#">
                          <strong>مختار مینائی</strong>
                        </a>
                      </p>
                      <p>کاربر جدید را تائید کرد</p>
                      <span>۳۳ دقیقه پیش</span>
                    </div>
                  </div>
                  <div className="media py-10 px-0">
                    <a className="avatar avatar-lg status-warning" href="#">
                      <img src="images/avatar/3.jpg" alt="..." />
                    </a>
                    <div className="media-body">
                      <p className="fs-16">
                        <a className="hover-primary" href="#">
                          <strong>لادن</strong>
                        </a>
                      </p>
                      <p>بروزرسانی ها را ..</p>
                      <span>۴۳ دقیقه پیش</span>
                    </div>
                  </div>
                  <div className="media py-10 px-0">
                    <a className="avatar avatar-lg status-primary" href="#">
                      <img src="images/avatar/4.jpg" alt="..." />
                    </a>
                    <div className="media-body">
                      <p className="fs-16">
                        <a className="hover-primary" href="#">
                          <strong>حامد</strong>
                        </a>
                      </p>
                      <p>دسته بندی ها را ویرایش کرد</p>
                      <span>۴۳ دقیقه پیش</span>
                    </div>
                  </div>
                  <div className="media py-10 px-0">
                    <a className="avatar avatar-lg status-success" href="#">
                      <img src="images/avatar/1.jpg" alt="..." />
                    </a>
                    <div className="media-body">
                      <p className="fs-16">
                        <a className="hover-primary" href="#">
                          <strong>سایه رحیمی </strong>
                        </a>
                      </p>
                      <p>تیکت جدید را بررسی کرد</p>
                      <span>همین الان</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.tab-pane */}
              {/* Settings tab content */}
              <div className="tab-pane" id="control-sidebar-settings-tab">
                <div className="flexbox">
                  <a href="javascript:void(0)" className="text-grey">
                    <i className="ti-more" />
                  </a>
                  <p>لیست فعالیت ها</p>
                  <a href="javascript:void(0)" className="text-end text-grey">
                    <i className="ti-plus" />
                  </a>
                </div>
                <ul className="todo-list mt-20">
                  <li className="py-15 px-5 by-1">
                    {/* checkbox */}
                    <input
                      type="checkbox"
                      id="basic_checkbox_1"
                      className="filled-in"
                    />
                    <label htmlFor="basic_checkbox_1" className="mb-0 h-15" />
                    {/* todo text */}
                    <span className="text-line">فعالیت اول منقضی شد</span>
                    {/* Emphasis label */}
                    <small className="badge bg-danger">
                      <i className="fa fa-clock-o" /> ۴ دقیقه پیش
                    </small>
                    {/* General tools such as edit or delete*/}
                    <div className="tools">
                      <i className="fa fa-edit" />
                      <i className="fa fa-trash-o" />
                    </div>
                  </li>
                  <li className="py-15 px-5">
                    {/* checkbox */}
                    <input
                      type="checkbox"
                      id="basic_checkbox_2"
                      className="filled-in"
                    />
                    <label htmlFor="basic_checkbox_2" className="mb-0 h-15" />
                    <span className="text-line">ایتم بررسی شد</span>
                    <small className="badge bg-info">
                      <i className="fa fa-clock-o" /> ۳ دقیقه پیش
                    </small>
                    <div className="tools">
                      <i className="fa fa-edit" />
                      <i className="fa fa-trash-o" />
                    </div>
                  </li>
                  <li className="py-15 px-5 by-1">
                    {/* checkbox */}
                    <input
                      type="checkbox"
                      id="basic_checkbox_3"
                      className="filled-in"
                    />
                    <label htmlFor="basic_checkbox_3" className="mb-0 h-15" />
                    <span className="text-line">خطا در تراکنش خرید</span>
                    <small className="badge bg-warning">
                      <i className="fa fa-clock-o" /> ۱ روز پیش
                    </small>
                    <div className="tools">
                      <i className="fa fa-edit" />
                      <i className="fa fa-trash-o" />
                    </div>
                  </li>
                  <li className="py-15 px-5">
                    {/* checkbox */}
                    <input
                      type="checkbox"
                      id="basic_checkbox_4"
                      className="filled-in"
                    />
                    <label htmlFor="basic_checkbox_4" className="mb-0 h-15" />
                    <span className="text-line">ثبت با موفقیت انجام شد</span>
                    <small className="badge bg-success">
                      <i className="fa fa-clock-o" /> ۳ روز پیش
                    </small>
                    <div className="tools">
                      <i className="fa fa-edit" />
                      <i className="fa fa-trash-o" />
                    </div>
                  </li>
                  <li className="py-15 px-5 by-1">
                    {/* checkbox */}
                    <input
                      type="checkbox"
                      id="basic_checkbox_5"
                      className="filled-in"
                    />
                    <label htmlFor="basic_checkbox_5" className="mb-0 h-15" />
                    <span className="text-line">پشتیبانی کامل شد</span>
                    <small className="badge bg-primary">
                      <i className="fa fa-clock-o" /> ۱ هفته پیش
                    </small>
                    <div className="tools">
                      <i className="fa fa-edit" />
                      <i className="fa fa-trash-o" />
                    </div>
                  </li>
                  <li className="py-15 px-5">
                    {/* checkbox */}
                    <input
                      type="checkbox"
                      id="basic_checkbox_6"
                      className="filled-in"
                    />
                    <label htmlFor="basic_checkbox_6" className="mb-0 h-15" />
                    <span className="text-line">بررسی کامل</span>
                    <small className="badge bg-info">
                      <i className="fa fa-clock-o" /> ۱ ماه پیش
                    </small>
                    <div className="tools">
                      <i className="fa fa-edit" />
                      <i className="fa fa-trash-o" />
                    </div>
                  </li>
                  <li className="py-15 px-5 by-1">
                    {/* checkbox */}
                    <input
                      type="checkbox"
                      id="basic_checkbox_9"
                      className="filled-in"
                    />
                    <label htmlFor="basic_checkbox_9" className="mb-0 h-15" />
                    <span className="text-line">درخواست ناموفق</span>
                    <small className="badge bg-warning">
                      <i className="fa fa-clock-o" /> ۱ روز پیش
                    </small>
                    <div className="tools">
                      <i className="fa fa-edit" />
                      <i className="fa fa-trash-o" />
                    </div>
                  </li>
                  <li className="py-15 px-5">
                    {/* checkbox */}
                    <input
                      type="checkbox"
                      id="basic_checkbox_10"
                      className="filled-in"
                    />
                    <label htmlFor="basic_checkbox_10" className="mb-0 h-15" />
                    <span className="text-line">بررسی مدارک کامل شد</span>
                    <small className="badge bg-success">
                      <i className="fa fa-clock-o" /> ۳ روز پیش
                    </small>
                    <div className="tools">
                      <i className="fa fa-edit" />
                      <i className="fa fa-trash-o" />
                    </div>
                  </li>
                </ul>
              </div>
              {/* /.tab-pane */}
            </div>
          </aside>
          {/* /.control-sidebar */}
          {/* Add the sidebar's background. This div must be placed immediately after the control sidebar */}
          <div className="control-sidebar-bg" />
        </>
      </PanelLayout>
    </>
  );
}

export default page;
