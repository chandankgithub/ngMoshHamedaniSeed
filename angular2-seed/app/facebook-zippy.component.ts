import {Component} from 'angular2/core';
import {ZippyComponent} from './zippy.component'
@Component({
    selector: 'fb-zippy',
    template: `
                <div class="zippyWrapper">
                    <bs-zippy title="From today's featured article">
                            The Kuiper belt is a circumstellar disc in the Solar System extending beyond the orbit of Neptune, at 30 to 50 astronomical units from the Sun. It is similar to the asteroid belt between Mars and Jupiter, but far larger—20 times as wide and 20 to 200 times as massive. Like the asteroid belt, it consists mainly of small bodies that are remnants from the Solar System's formation. Although many asteroids are composed primarily of rock and metal, most Kuiper belt objects are composed largely of frozen volatiles such as methane, ammonia and water. The disc was named after Dutch-American astronomer Gerard Kuiper, though he did not actually predict its existence. Some of the Solar System's moons, such as Neptune's Triton and Saturn's Phoebe, are thought to have originated in the region. It is home to three officially recognized dwarf planets: Haumea, Makemake, and Pluto, the largest and most massive member of the Kuiper belt. Originally considered a planet, Pluto was reclassified as a dwarf planet in 2006. (Full article...)
                    </bs-zippy>

                    <bs-zippy title="Did you know...">
                            ... that in 2000, Lloyds Bank RFC's ground was sold by Lloyds TSB, which meant the club had to groundshare with a rival bank?
                            ... that V. S. Sangwan developed a treatment protocol for corneal injuries using cultured limbal stem cells?
                            ... that Turkish journalist Erol Önderoğlu, a campaigner for freedom of the press, was arrested for spreading "terrorism propaganda" in favor of the Kurdistan Workers' Party?
                            ... that the German cities of Duisburg, Essen, and Kiel all had their populations increase five-fold or more between 1875 and 1910?
                    </bs-zippy>

                    <bs-zippy title="From today's featured list">
                            The British Overseas Territory of Bermuda has a long history of encounters with Atlantic tropical cyclones, many of which inflicted significant damage and influenced the territory's development. A small archipelago comprising about 138 islands and islets, Bermuda occupies 21 square miles (54 km2) in the North Atlantic Ocean, roughly 650 miles (1,050 km) east of Cape Hatteras, North Carolina. The islands are situated far outside the main development region for Atlantic hurricanes, but within the typical belt of recurving tropical cyclones. According to the Bermuda Weather Service, the islands of Bermuda experience a damaging tropical cyclone once every six to seven years, on average. Due to the small area of the island chain, landfalls and direct hits are rare. Events have caused Bermuda widely varying degrees of damage. A hurricane in 1609 was responsible for the first permanent settlement on Bermuda: in late July, the Jamestown-bound, British ship Sea Venture nearly foundered in the storm and sought refuge on the islands, which the passengers found surprisingly hospitable. Hurricane Fabian was the most intense storm to impact the territory in modern times. (Full list...)
                    </bs-zippy>

                    <bs-zippy title="The Arts Portal">
                            The arts is a vast subdivision of culture, composed of many creative endeavors and disciplines. It is a broader term than "art", which, as a description of a field, usually means only the visual arts. The arts encompass the visual arts, the literary arts and the performing arts – music, theatre, dance and film, among others. This list is by no means comprehensive, but only meant to introduce the concept of the arts. For all intents and purposes, the history of the arts begins with the history of art. The arts might have origins in early human evolutionary prehistory.
                    </bs-zippy>

                    <bs-zippy title="Featured biography">
                            Henry Moore was a British artist and sculptor. Born into a poor mining family in the Yorkshire town of Castleford, he became well-known for his large-scale abstract cast bronze and carved marble sculptures; substantially supported by the British art establishment, Moore helped to introduce a particular form of modernism into Britain. His ability to satisfy large-scale commissions made him exceptionally wealthy towards the end of his life. However, he lived frugally and most of his wealth went to endow the Henry Moore Foundation, which continues to support education and promotion of the arts. His signature form is a pierced reclining figure, first influenced by a Toltec-Maya sculpture known as "Chac Mool", which he had seen as a plaster cast in Paris in 1925. Early versions are pierced conventionally as a bent arm reconnects with the body. Later, more abstract versions, are pierced directly through the body in order to explore the concave and convex shapes. These more extreme piercings developed in parallel with Barbara Hepworth's sculptures. Hepworth first pierced a torso after misreading a review of one of Henry Moore's early shows.
                    </bs-zippy>

                </div>

                
    `,
    styles:[`
                .zippyWrapper{
                        margin: 30px;
                }    
    `],
    directives:[ZippyComponent]
})
export class FacebookZippyComponent{

}