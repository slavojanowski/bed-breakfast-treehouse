import supabase from "./supabaseClient";

export const createBookingData = async (bookingData) => {
  const { data, error } = await supabase
    .from("bookings")
    .insert([
      {
        booked_room_name: bookingData.title,
        checkin_date: bookingData.checkinDate,
        checkout_date: bookingData.checkoutDate,
        adults_number: bookingData.adultsNumber,
        kids_number: bookingData.kidsNumber,
        room_type_supa: bookingData.roomType,
        bed_size_config: bookingData.bedConfig,
        book_message: bookingData.bookMessage,
        first_name: bookingData.firstName,
        last_name: bookingData.lastName,
        email_address: bookingData.emailAddress,
        phone_number: bookingData.phoneNumber,
        street_address: bookingData.streetAddress,
        address_extra_line: bookingData.addressExtraLine,
        city_name: bookingData.cityName,
        zip_code: bookingData.zipCode,
      },
    ])
    .select();

  return { data, error };
};
