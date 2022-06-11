<template>
<!-- eslint-disable -->
<div>
<div id="app">

</div>
</div>
</template>

<script>
import jsPDF from 'jspdf';

export default {
  name: 'testPdf',
  data() {
    return {
      columns: [
        'id',
        'Department',
        'Joiners',
        'Resignations',
        'Terminations',
      ],
      vehicles: [],
    };
  },
};
</script>
