import React from 'react'
import Header from '../../partials/Header';
import Footer from '../../partials/Footer';
import CardBanner from '../../partials/CardBanner';
import CardStory from '../../partials/CardStory';
import CardLeague from '../../partials/CardLeague';

const Football = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="container mx-auto p-4">
            <CardBanner
              bg={"bg-gradient-to-r from-green-600 to-green-800"}
              news={"Football News"}
              update={"All the latest from the world of football"}
            />

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <CardStory
                img={
                  "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                }
                alt={"Football match"}
                title={"Champions League Final Preview"}
                description={
                  "The two best teams in Europe face off in what promises to be an epic clash."
                }
                btn_bg={"bg-green-600"}
                btn_hover={"hover:bg-green-700"}
              />
              <CardStory
                img={
                  "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                }
                alt={"Football transfer"}
                title={"Champions League Final Preview"}
                description={
                  "The two best teams in Europe face off in what promises to be an epic clash."
                }
                btn_bg={"bg-green-600"}
                btn_hover={"hover:bg-green-700"}
              />
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Top Leagues
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <CardLeague
                  title={"Premier League"}
                  text_color={"text-blue-700"}
                  country={"England"}
                />
                <CardLeague
                  title={"La Liga"}
                  text_color={"text-blue-500"}
                  country={"Spain"}
                />
                <CardLeague
                  title={"La Liga"}
                  text_color={"text-black"}
                  country={"Italy"}
                />
                <CardLeague
                  title={"Bundesliga"}
                  text_color={"text-red-600"}
                  country={"Germany"}
                />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Football;
