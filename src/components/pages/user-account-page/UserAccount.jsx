import supabase from "../../../config/supabaseClient";
import { useState, useEffect } from "react";
import BookingCard from "../../bookings/BookingCard";
import SinglePageCover from "/various-images/mountains.jpg";
import PageCover from "../../global/PageCover/PageCover";
import PageBanner from "../../global/PageCover/PageBanner";
import ButtonLarge from "../../global/ButtonLarge";
import "../../bookings/css/booked-room-details-tile.css";
import "./css/user-account-page.css";
import { useNavigate } from "react-router";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const UserAccount = () => {
  const [fetchError, setFetchError] = useState(null);
  const [bookings, setBookings] = useState(null);
  const [userName, setUserName] = useState(null);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setBookings((prevBookings) => {
      return prevBookings.filter((booking) => booking.id !== id);
    });
  };

  useEffect(() => {
    const getUserName = async () => {
      const { data } = await supabase.auth.getUser();
      const displayName = data.user.user_metadata.display_name;
      setUserName(displayName);
    };

    getUserName();
  }, []);

  // Pobieranie dokonanych rezerwacji
  useEffect(() => {
    const fetchBookings = async () => {
      const { data, error } = await supabase
        .from("bookings")
        .select()
        .order("created_at", { ascending: false });

      if (error) {
        setFetchError("Nie można było pobrać danych");
        setBookings(null);
        // console.log(error);
      }
      if (data) {
        setBookings(data);
        setFetchError(null);
      }
    };
    fetchBookings();
  }, []);

  const handleColumnClick = (sectionParam) => {
    setActiveSection(sectionParam);
  };

  {
    /* --------- Wylogogowywanie się ---------------- */
  }
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    navigate("/logowanie");
  };

  return (
    <>
      <PageCover
        coverStyle={{
          backgroundImage: `url(${SinglePageCover})`,
        }}
        coverClass={"our-rooms-page-cover"}
      >
        <PageBanner
          title="Twój wirtualny pokój"
          subtitle="Tutaj znajdziesz ważne dla Ciebie informacje"
        >
          <ButtonLarge buttonText="Wróć do strony głównej" buttonLink="/" />
        </PageBanner>
      </PageCover>

      <TransitionGroup>
        <>
          <div className="page user-account-page">
            <section className="acc-heading">
              <div
                onClick={() => handleColumnClick("bookingsParam")}
                className="column bookings-info"
              >
                <h4>Historia Twoich rezerwacji</h4>
              </div>
              <div
                onClick={() => handleColumnClick("todoParam")}
                className="column todo-info"
              >
                <h4>Zaplanuj swój pobyt</h4>
              </div>
              <div
                onClick={() => handleColumnClick("weatherParam")}
                className="column weather-info"
              >
                <h4>Sprawdź lokalną pogodę</h4>
              </div>
              <div className="column log-info">
                <h5>
                  Witaj <b>{userName ? userName : "User"}</b>, jesteś
                  zalogowany.
                </h5>
                <button onClick={signOut}>Wyloguj się</button>
              </div>
            </section>

            <div className="acc-container">
              {/* ----- bookings section ----- */}
              {activeSection === "bookingsParam" && (
                <div className="section bookings-section">
                  {fetchError && <p>{fetchError}</p>}
                  {bookings && (
                    <div className="bookings">
                      <div className="booking-grid">
                        {bookings.map((booking, index) => (
                          <CSSTransition
                            key={"csst" + index}
                            in={true}
                            appear={true}
                            timeout={2500}
                            onEnter={() => console.log("onEnter")}
                            onEntering={() => console.log("onEntering")}
                            onEntered={() => console.log("onEntered")}
                            onExit={() => console.log("onExit")}
                            onExiting={() => console.log("onExiting")}
                            onExited={() => console.log("onExited")}
                            classNames="css-transition"
                          >
                            <>
                              <BookingCard
                                key={booking.id}
                                booking={booking}
                                onDelete={handleDelete}
                              />
                            </>
                          </CSSTransition>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ----- plan your stay section ----- */}
              {activeSection === "todoParam" && (
                <CSSTransition
                  in={true}
                  appear={true}
                  timeout={2500}
                  onEnter={() => console.log("onEnter")}
                  onEntering={() => console.log("onEntering")}
                  onEntered={() => console.log("onEntered")}
                  onExit={() => console.log("onExit")}
                  onExiting={() => console.log("onExiting")}
                  onExited={() => console.log("onExited")}
                  classNames="css-transition"
                >
                  <div className="section todo-section">
                    The standard Lorem Ipsum passage, used since the 1500s
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum." Section 1.10.32 of "de
                    Finibus Bonorum et Malorum", written by Cicero in 45 BC "Sed
                    ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem ullam corporis
                    suscipit laboriosam, nisi ut aliquid ex ea commodi
                    consequatur? Quis autem vel eum iure reprehenderit qui in ea
                    voluptate velit esse quam nihil molestiae consequatur, vel
                    illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    1914 translation by H. Rackham.
                  </div>
                </CSSTransition>
              )}

              {/* ----- check local weather section ----- */}
              {activeSection === "weatherParam" && (
                <CSSTransition
                  in={true}
                  appear={true}
                  timeout={2500}
                  onEnter={() => console.log("onEnter")}
                  onEntering={() => console.log("onEntering")}
                  onEntered={() => console.log("onEntered")}
                  onExit={() => console.log("onExit")}
                  onExiting={() => console.log("onExiting")}
                  onExited={() => console.log("onExited")}
                  classNames="css-transition"
                >
                  <div className="section weather-section">
                    Pleasure and praising pain was born and I will give you a
                    complete account of the system, and expound the actual
                    teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself, because it is pleasure, but
                    because those who do not know how to pursue pleasure
                    rationally encounter consequences that are extremely
                    painful. Nor again is there anyone who loves or pursues or
                    desires to obtain pain of itself, because it is pain, but
                    because occasionally circumstances occur in which toil and
                    pain can procure him some great pleasure. To take a trivial
                    example, which of us ever undertakes laborious physical
                    exercise, except to obtain some advantage from it? But who
                    has any right to find fault with a man who chooses to enjoy
                    a pleasure that has no annoying consequences, or one who
                    avoids a pain that produces no resultant pleasure?" Section
                    1.10.33 of "de Finibus Bonorum et Malorum", written by
                    Cicero in 45 BC "At vero eos et accusamus et iusto odio
                    dignissimos ducimus qui blanditiis praesentium voluptatum
                    deleniti atque corrupti quos dolores et quas molestias
                    excepturi sint occaecati cupiditate
                  </div>
                </CSSTransition>
              )}
            </div>
          </div>
        </>
      </TransitionGroup>
    </>
  );
};

export default UserAccount;
