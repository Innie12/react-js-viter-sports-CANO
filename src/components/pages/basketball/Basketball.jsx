import React from 'react'
import Header from '../../partials/Header'
import Footer from '../../partials/Footer';
import CardBanner from '../../partials/CardBanner';
import CardStory from '../../partials/CardStory';
import CardStanding from '../../partials/CardStanding';

const Basketball = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto p-4">
            <CardBanner
              bg={"bg-gradient-to-r from-orange-600 to-red-700"}
              news={"Basketball Updates"}
              update={"Court-side coverage of NBA and international basketball"}
            />

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <CardStory
                img={"./images/basketball-1.webp"}
                alt={"NBA game"}
                title={"NBA Finals: Game 7 Preview"}
                description={
                  "The championship comes down to one final game between two historic rivals."
                }
                btn_bg={"bg-orange-600"}
                btn_hover={"hover:bg-orange-700"}
              />
              <CardStory
                img={"./images/basketball-2.webp"}
                alt={"Basketball player"}
                title={"Rising Stars of the Season"}
                description={
                  "Meet the young players who are taking the league by storm this year."
                }
                btn_bg={"bg-orange-600"}
                btn_hover={"hover:bg-orange-700"}
              />
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                NBA Standings
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="py-2 px-4 text-left">Team</th>
                      <th className="py-2 px-4 text-center">W</th>
                      <th className="py-2 px-4 text-center">L</th>
                      <th className="py-2 px-4 text-center">PCT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <CardStanding
                      team={"Boston Celtics"}
                      w={"57"}
                      l={"25"}
                      pct={".695"}
                    />
                    <CardStanding
                      team={"Milwaukee Bucks"}
                      w={"58"}
                      l={"24"}
                      pct={".707"}
                    />
                    <CardStanding
                      team={"Denver Nuggets"}
                      w={"53"}
                      l={"29"}
                      pct={".646"}
                    />
                    <CardStanding
                      team={"Phoenix Suns"}
                      w={"45"}
                      l={"37"}
                      pct={".549"}
                    />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Basketball;
