<script lang="ts">
  import { SegmentedButton } from 'noph-ui'
</script>
<SegmentedButton
  name="demo"
  options={[
    {
      label: 'Week',
      selected: true,
    },
    {
      label: 'Month',
    },
    {
      label: 'Year',
    },
  ]}
/>