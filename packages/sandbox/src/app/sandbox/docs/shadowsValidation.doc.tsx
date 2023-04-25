import { Box, Text, ButtonDock, Card } from '@getluko/streamline';
import { ScrollView } from 'react-native';

export const ShadowValidationSandbox = () => {
  return (
    <Box flex={1}>
      <ScrollView style={{ flex: 0 }}>
        <Box paddingHorizontal="md">
          <Text>
            White dwarf encyclopaedia galactica extraordinary claims require
            extraordinary evidence how far away brain is the seed of
            intelligence kindling the energy hidden in matter. A still more
            glorious dawn awaits prime number Orion's sword citizens of distant
            epochs a very small stage in a vast cosmic arena of brilliant
            syntheses. From which we spring a mote of dust suspended in a
            sunbeam concept of the number one star stuff harvesting star light
            Sea of Tranquility finite but unbounded. Of brilliant syntheses
            network of wormholes billions upon billions science muse about
            Cambrian explosion. A billion trillion inconspicuous motes of rock
            and gas concept of the number one great turbulent clouds great
            turbulent clouds vanquish the impossible? Orion's sword Orion's
            sword the carbon in our apple pies permanence of the stars rich in
            mystery the only home we've ever known. Kindling the energy hidden
            in matter the sky calls to us are creatures of the cosmos vastness
            is bearable only through love a still more glorious dawn awaits are
            creatures of the cosmos.
          </Text>
          <Box paddingVertical="sm">
            <Card backgroundColor="BLUKO_500" shadows="soft">
              <Text color="PURE_WHITE_1000">Soft</Text>
            </Card>
          </Box>

          <Text>
            Of brilliant syntheses Rig Veda a still more glorious dawn awaits
            worldlets across the centuries vanquish the impossible. Rich in
            heavy atoms kindling the energy hidden in matter network of
            wormholes from which we spring with pretty stories for which there's
            little good evidence vastness is bearable only through love. A mote
            of dust suspended in a sunbeam as a patch of light how far away
            emerged into consciousness star stuff harvesting star light how far
            away. Venture rich in mystery brain is the seed of intelligence
            explorations vastness is bearable only through love culture? The
            carbon in our apple pies extraplanetary bits of moving fluff realm
            of the galaxies two ghostly white figures in coveralls and helmets
            are softly dancing the carbon in our apple pies. Vanquish the
            impossible cosmic fugue star stuff harvesting star light white dwarf
            laws of physics made in the interiors of collapsing stars. Muse
            about encyclopaedia galactica venture how far away worldlets
            descended from astronomers. Not a sunrise but a galaxyrise paroxysm
            of global death take root and flourish dispassionate
            extraterrestrial observer star stuff harvesting star light trillion.
            Concept of the number one across the centuries something incredible
            is waiting to be known concept of the number one rings of Uranus
            permanence of the stars. Not a sunrise but a galaxyrise network of
            wormholes Jean-François Champollion Sea of Tranquility extraordinary
            claims require extraordinary evidence
          </Text>
          <Box paddingVertical="sm">
            <Card backgroundColor="BLUKO_500" shadows="moderate">
              <Text color="PURE_WHITE_1000">Moderate</Text>
            </Card>
          </Box>
          <Text>
            Orion's sword bits of moving fluff kindling the energy hidden in
            matter emerged into consciousness hydrogen atoms hearts of the
            stars. Intelligent beings paroxysm of global death citizens of
            distant epochs star stuff harvesting star light paroxysm of global
            death vanquish the impossible. Laws of physics another world another
            world with pretty stories for which there's little good evidence
            concept of the number one muse about. Rich in heavy atoms
            inconspicuous motes of rock and gas courage of our questions dream
            of the mind's eye invent the universe not a sunrise but a
            galaxyrise. The ash of stellar alchemy another world not a sunrise
            but a galaxyrise corpus callosum the carbon in our apple pies made
            in the interiors of collapsing stars. Worldlets citizens of distant
            epochs emerged into consciousness paroxysm of global death preserve
            and cherish that pale blue dot star stuff harvesting star light.
          </Text>
          <Box paddingVertical="sm">
            <Card backgroundColor="BLUKO_500" shadows="strong">
              <Text color="PURE_WHITE_1000">Strong</Text>
            </Card>
          </Box>
          <Text>
            Paroxysm of global death permanence of the stars are creatures of
            the cosmos vastness is bearable only through love dream of the
            mind's eye paroxysm of global death? Consciousness citizens of
            distant epochs a billion trillion vastness is bearable only through
            love Tunguska event Jean-François Champollion. A still more glorious
            dawn awaits a mote of dust suspended in a sunbeam something
            incredible is waiting to be known vanquish the impossible
            intelligent beings laws of physics. Dispassionate extraterrestrial
            observer brain is the seed of intelligence star stuff harvesting
            star light network of wormholes tendrils of gossamer clouds courage
            of our questions. Inconspicuous motes of rock and gas as a patch of
            light Vangelis tendrils of gossamer clouds take root and flourish
            Cambrian explosion? Two ghostly white figures in coveralls and
            helmets are softly dancing paroxysm of global death courage of our
            questions a mote of dust suspended in a sunbeam hearts of the stars
            citizens of distant epochs. Two ghostly white figures in coveralls
            and helmets are softly dancing paroxysm of global death Hypatia
            concept of the number one Sea of Tranquility intelligent beings and
            billions upon billions upon billions upon billions upon billions
            upon billions upon billions.
          </Text>
        </Box>
      </ScrollView>
      <Box
        position="absolute"
        bottom={30}
        left={0}
        right={0}
        pointerEvents="none"
      >
        <ButtonDock
          isFloating
          primary={{
            text: 'Danger Default',
            onPress: () => {
              console.log('Primary button pressed');
            },
            appearance: 'danger',
          }}
          secondary={{
            text: 'Neutral Default',
            onPress: () => {
              console.log('Primary button pressed');
            },
            appearance: 'neutral',
          }}
        />
      </Box>
    </Box>
  );
};
