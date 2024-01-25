// Iteration 1 using callbacks

getInstruction('mashedPotatoes', 0, step0 => {
  document.querySelector('#mashedPotatoes').innerHTML += `<li>${step0}</li>`;

  getInstruction('mashedPotatoes', 1, step1 => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step1}</li>`;

    getInstruction('mashedPotatoes', 2, step2 => {
      document.querySelector(
        '#mashedPotatoes'
      ).innerHTML += `<li>${step2}</li>`;
      getInstruction('mashedPotatoes', 3, step3 => {
        document.querySelector(
          '#mashedPotatoes'
        ).innerHTML += `<li>${step3}</li>`;

        getInstruction('mashedPotatoes', 4, step4 => {
          document.querySelector(
            '#mashedPotatoes'
          ).innerHTML += `<li>${step4}</li>`;

          getInstruction('mashedPotatoes', 5, step5 => {
            document.querySelector(
              '#mashedPotatoes'
            ).innerHTML += `<li>${step5}</li>`;

            getInstruction('mashedPotatoes', 6, step6 => {
              document.querySelector(
                '#mashedPotatoes'
              ).innerHTML += `<li>${step6}</li>`;

              getInstruction('mashedPotatoes', 7, step7 => {
                document.querySelector(
                  '#mashedPotatoes'
                ).innerHTML += `<li>${step7}</li>`;

                document.querySelector('#mashedPotatoes').innerHTML +=
                  '<li>Mashed potatoes are ready!</li>';
              });
            });
          });
        });
      });
    });
  });
});
document.querySelector('#mashedPotatoesImg').removeAttribute('hidden');

// Iteration 2 -- using promises

obtainInstruction('steak', 0)
  .then(step0 => {
    document.querySelector('#steak').innerHTML += `<li>${step0}</li>`;
    return obtainInstruction('steak', 1);
  })
  .then(step1 => {
    document.querySelector('#steak').innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2);
  })
  .then(step2 => {
    document.querySelector('#steak').innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 3);
  })
  .then(step3 => {
    document.querySelector('#steak').innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('steak', 4);
  })
  .then(step4 => {
    document.querySelector('#steak').innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('steak', 5);
  })
  .then(step5 => {
    document.querySelector('#steak').innerHTML += `<li>${step5}</li>`;
    return obtainInstruction('steak', 6);
  })

  .then(step6 => {
    document.querySelector('#steak').innerHTML += `<li>${step6}</li>`;
    document.querySelector('#steak').innerHTML += '<li>Stake is ready!</li>';
    document.querySelector('#steakImg').removeAttribute('hidden');
  });

// Iteration 3 - using async/await

async function makeBroccoli() {
  const steps = await Promise.all([
    obtainInstruction('broccoli', 0),
    obtainInstruction('broccoli', 1),
    obtainInstruction('broccoli', 2),
    obtainInstruction('broccoli', 3),
    obtainInstruction('broccoli', 4),
    obtainInstruction('broccoli', 5),
    obtainInstruction('broccoli', 6),
  ]);

  steps.forEach(step => {
    document.querySelector('#broccoli').innerHTML += `<li>${step}</li>`;
  });

  document.querySelector('#broccoli').innerHTML +=
    '<li>Broccoli is ready!</li>';
  document.querySelector('#broccoliImg').removeAttribute('hidden');
}

makeBroccoli();

// Bonus Iteration 5 - using Promise.all

Promise.all([
  obtainInstruction('brusselsSprouts', 0),
  obtainInstruction('brusselsSprouts', 1),
  obtainInstruction('brusselsSprouts', 2),
  obtainInstruction('brusselsSprouts', 3),
  obtainInstruction('brusselsSprouts', 4),
  obtainInstruction('brusselsSprouts', 5),
  obtainInstruction('brusselsSprouts', 6),
  obtainInstruction('brusselsSprouts', 7),
]).then(steps => {
  steps.forEach(step => {
    document.querySelector('#brusselsSprouts').innerHTML += `<li>${step}</li>`;
  });

  document.querySelector('#brusselsSprouts').innerHTML +=
    '<li>Brussels sprouts are ready!</li>';
  document.querySelector('#brusselsSproutsImg').removeAttribute('hidden');
});
