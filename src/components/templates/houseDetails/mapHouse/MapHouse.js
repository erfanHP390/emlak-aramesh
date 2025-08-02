"use client";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styles from "../HouseDetails.module.css";

// تنظیمات آیکون مارکر
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

function MapHouse({ fullAddress }) {
  const [position, setPosition] = useState([35.6892, 51.389]); // موقعیت پیش‌فرض (تهران)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [foundAddress, setFoundAddress] = useState("");
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    if (!fullAddress) {
      setLoading(false);
      setError("آدرسی وارد نشده است");
      setMapReady(true);
      return;
    }

    const geocodeAddress = async () => {
      try {
        setLoading(true);
        setError(null);

        // روش اول: استفاده از Nominatim با پارامترهای بهینه‌شده
        let response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            fullAddress
          )}&countrycodes=ir&addressdetails=1&limit=1`
        );

        let data = await response.json();

        if (data && data.length > 0) {
          const firstResult = data[0];
          setPosition([
            parseFloat(firstResult.lat),
            parseFloat(firstResult.lon),
          ]);
          setFoundAddress(firstResult.display_name || fullAddress);
          setMapReady(true);
          return;
        }

        // روش دوم: جستجوی گسترده‌تر بدون فیلتر کشور
        response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            fullAddress
          )}&addressdetails=1&limit=1`
        );

        data = await response.json();

        if (data && data.length > 0) {
          const firstResult = data[0];
          setPosition([
            parseFloat(firstResult.lat),
            parseFloat(firstResult.lon),
          ]);
          setFoundAddress(firstResult.display_name || fullAddress);
          setMapReady(true);
          return;
        }

        // روش سوم: تقسیم آدرس به بخش‌های کوچکتر
        const addressParts = fullAddress.split("،").map((part) => part.trim());
        for (let i = addressParts.length; i > 0; i--) {
          const partialAddress = addressParts.slice(0, i).join("، ");
          response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
              partialAddress
            )}&countrycodes=ir&limit=1`
          );
          data = await response.json();
          if (data && data.length > 0) {
            const firstResult = data[0];
            setPosition([
              parseFloat(firstResult.lat),
              parseFloat(firstResult.lon),
            ]);
            setFoundAddress(firstResult.display_name || partialAddress);
            setMapReady(true);
            setError(
              `آدرس حدودی موقعیت: ${partialAddress}`
            );
            return;
          }
        }

        throw new Error("آدرس یافت نشد");
      } catch (err) {
        console.error("خطا در دریافت موقعیت:", err);
        setError("آدرس حدودی موقعیت");
        setPosition([35.6892, 51.389]); // موقعیت مرکز تهران
        setFoundAddress("تهران، ایران");
        setMapReady(true);
      } finally {
        setLoading(false);
      }
    };

    geocodeAddress();
  }, [fullAddress]);

  return (
    <div className={`${styles.box} bg-primary-theme`}>
      <div className={styles["box-header"]}>
        <h4 className={`${styles["box-title"]} text-heading Anjoman_Bold`}>
          موقعیت جغرافیایی
        </h4>
      </div>
      <div className={styles["box-body"]}>
        {loading ? (
          <div
            className={`${styles["text-primary"]} Anjoman_Regular`}
            style={{ textAlign: "center", padding: "20px" }}
          >
            در حال جستجوی موقعیت...
          </div>
        ) : (
          <>
            {error && (
              <div
                className="text-primary Anjoman_Regular"
                style={{
                  color: "#f39c12",
                  textAlign: "center",
                  padding: "10px",
                  marginBottom: "15px",
                }}
              >
                {error}
              </div>
            )}

            {mapReady && (
              <div className={styles["map-container"]}>
                <MapContainer
                  center={position}
                  zoom={16}
                  className={`${styles.map} bg-input`}
                  style={{
                    height: "400px",
                    width: "100%",
                    borderRadius: "8px",
                    border: "1px solid var(--input-border)",
                  }}
                  whenCreated={() => setMapReady(true)}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={position}>
                    <Popup
                      className="Anjoman_Regular"
                      style={{ direction: "rtl", textAlign: "right" }}
                    >
                      <div style={{ maxWidth: "250px" }}>
                        <strong>موقعیت نمایش داده شده:</strong>
                        <br />
                        {foundAddress || fullAddress}
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            )}

            <div
              className={`${styles["location-description"]} bg-input`}
              style={{
                borderRadius: "8px",
                padding: "12px",
                marginTop: "12px",
                border: "1px solid var(--input-border)",
              }}
            >
              <p className="text-primary Anjoman_Regular" style={{ margin: 0 }}>
                <strong>آدرس:</strong> {fullAddress}
              </p>
              {/* {foundAddress && foundAddress !== fullAddress && (
                <p
                  className="text-primary Anjoman_Regular"
                  style={{ margin: "8px 0 0 0" }}
                >
                  <strong>آدرس یافت شده:</strong> {foundAddress}
                </p>
              )} */}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MapHouse;
