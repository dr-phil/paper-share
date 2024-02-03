import { useEffect, useState } from "react";
import { highlightSelection } from "@root/common/highlight";

function Paper({handleSelectionChange}) {

    useEffect (() => {
        document.addEventListener('mouseup', handleSelectionChange);
    }, []);

    return ( 
        <div style={{width: "90%"}}>
          Reference docs and spreadsheets seemingly make the world go ’round, but
        what if employees could just close those tabs for good without losing
        that knowledge? One startup is taking on that complicated challenge.
        Predictably, the solution is quite complicated, as well, from a tech
        perspective, involving an AI solution that analyzes everything on your
        PC screen — all the time — and highlights text onscreen for which you
        could use a little bit more context. The team at Polarity wants its tech
        to help teams lower the knowledge barrier to getting stuff done and
        allow people to focus more on procedure and strategy than memorizing
        file numbers, IP addresses and jargon. The Connecticut startup just
        closed an $8.1 million “AA” round led by TechOperators, with Shasta
        Ventures, Strategic Cyber Ventures, Gula Tech Adventures and Kaiser
        Permanente Ventures also participating in the round. The startup closed
        its $3.5 million Series A in early 2017. Interestingly, the
        enterprise-centric startup pitches itself as an AR company, augmenting
        what’s happening on your laptop screen much like a pair of AR glasses
        could. The startup’s computer vision software that uses character
        recognition to analyze what’s on a user’s screen can be helpful for
        enterprise teams importing things like a company Rolodex so that bios
        are always collectively a click away, but the real utility comes from
        team-wide flagging of things like suspicious IP addresses that will
        allow entire teams to learn about new threats and issues at the same
        time without having to constantly check in with their co-workers. The
        startup’s current product has a big focus on analysts and security
        teams.
            {/* <header>
    <h1>Welcome to Stupid Dummy Land</h1>
    <p>This is a place of simplicity and nonsense.</p>
  </header>

  <main>
    <section>
      <h2>Section 1</h2>
      <p>This is a stupid dummy section. Feel free to add your nonsense content here.</p>
    </section>

    <section>
      <h2>Section 2</h2>
      <p>More nonsense goes here. Lorem ipsum dolor sit amet...</p>
    </section>
  </main>

  <footer>
    <p>&copy; 2024 Stupid Dummy Corp. All rights reserved.</p>
  </footer> */}
        </div>
    );
}

export default Paper;